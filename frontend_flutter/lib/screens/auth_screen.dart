import 'package:flutter/material.dart';
import '../services/api_service.dart';
import 'dashboard_screen.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  final api = ApiService();
  final email = TextEditingController();
  final password = TextEditingController();
  final fullName = TextEditingController();
  String role = 'donor';
  bool isLogin = true;

  Future<void> submit() async {
    if (isLogin) {
      final result = await api.login(email.text.trim(), password.text);
      final user = result['user'] as Map<String, dynamic>;
      if (!mounted) return;
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (_) => DashboardScreen(role: user['role'] as String)),
      );
    } else {
      await api.register({
        'role': role,
        'fullName': fullName.text.trim(),
        'email': email.text.trim(),
        'password': password.text,
      });
      if (!mounted) return;
      setState(() => isLogin = true);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Registered successfully. Please login.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(isLogin ? 'ReliefNet Login' : 'ReliefNet Register')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(children: [
          if (!isLogin) TextField(controller: fullName, decoration: const InputDecoration(labelText: 'Full Name')),
          TextField(controller: email, decoration: const InputDecoration(labelText: 'Email')),
          TextField(controller: password, decoration: const InputDecoration(labelText: 'Password'), obscureText: true),
          if (!isLogin)
            DropdownButton<String>(
              value: role,
              items: const ['donor', 'volunteer', 'ngo', 'admin', 'victim'].map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
              onChanged: (v) => setState(() => role = v ?? 'donor'),
            ),
          const SizedBox(height: 16),
          ElevatedButton(onPressed: submit, child: Text(isLogin ? 'Login' : 'Register')),
          TextButton(onPressed: () => setState(() => isLogin = !isLogin), child: Text(isLogin ? 'Create account' : 'Have an account? Login')),
        ]),
      ),
    );
  }
}

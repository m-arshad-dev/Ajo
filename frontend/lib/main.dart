import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const ReliefNetApp());
}

class ReliefNetApp extends StatelessWidget {
  const ReliefNetApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ReliefNet',
      theme: ThemeData(colorSchemeSeed: Colors.blue, useMaterial3: true),
      home: const DisasterListScreen(),
    );
  }
}

class DisasterListScreen extends StatefulWidget {
  const DisasterListScreen({super.key});

  @override
  State<DisasterListScreen> createState() => _DisasterListScreenState();
}

class _DisasterListScreenState extends State<DisasterListScreen> {
  final String baseUrl = 'http://localhost:4000';
  List<dynamic> disasters = [];
  bool loading = true;

  @override
  void initState() {
    super.initState();
    fetchDisasters();
  }

  Future<void> fetchDisasters() async {
    setState(() => loading = true);
    final response = await http.get(Uri.parse('$baseUrl/api/disasters'));
    if (response.statusCode == 200) {
      setState(() {
        disasters = jsonDecode(response.body) as List<dynamic>;
        loading = false;
      });
    } else {
      setState(() => loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('ReliefNet Disasters')),
      body: loading
          ? const Center(child: CircularProgressIndicator())
          : RefreshIndicator(
              onRefresh: fetchDisasters,
              child: ListView.builder(
                itemCount: disasters.length,
                itemBuilder: (context, index) {
                  final d = disasters[index] as Map<String, dynamic>;
                  return ListTile(
                    title: Text(d['title']?.toString() ?? 'Untitled'),
                    subtitle: Text('${d['location']} • ${d['severity']}'),
                    trailing: Text(d['status']?.toString() ?? 'unknown'),
                  );
                },
              ),
            ),
    );
  }
}

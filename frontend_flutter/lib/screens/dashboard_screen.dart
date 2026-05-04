import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class DashboardScreen extends StatefulWidget {
  final String role;
  const DashboardScreen({super.key, required this.role});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  late Future<List<dynamic>> _disasters;

  @override
  void initState() {
    super.initState();
    _disasters = fetchDisasters();
  }

  Future<List<dynamic>> fetchDisasters() async {
    final response = await http.get(Uri.parse('http://10.0.2.2:4000/api/disasters'));
    if (response.statusCode != 200) throw Exception('Failed to load disasters');
    return jsonDecode(response.body) as List<dynamic>;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Dashboard (${widget.role})')),
      body: FutureBuilder<List<dynamic>>(
        future: _disasters,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) return const Center(child: CircularProgressIndicator());
          if (snapshot.hasError) return Center(child: Text('Error: ${snapshot.error}'));
          final disasters = snapshot.data ?? [];
          return ListView.builder(
            itemCount: disasters.length,
            itemBuilder: (context, index) {
              final d = disasters[index] as Map<String, dynamic>;
              return ListTile(title: Text(d['title'] as String), subtitle: Text('${d['location']} • ${d['severity']}'));
            },
          );
        },
      ),
    );
  }
}

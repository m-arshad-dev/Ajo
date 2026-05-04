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
      debugShowCheckedModeBanner: false,
      title: 'ReliefNet',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.redAccent),
        useMaterial3: true,
      ),
      home: const DashboardScreen(),
    );
  }
}

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});

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
    final response = await http.get(
      Uri.parse('http://10.0.2.2:4000/api/disasters'),
    );

    if (response.statusCode != 200) {
      throw Exception('Failed to load disasters');
    }

    return jsonDecode(response.body) as List<dynamic>;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('ReliefNet Dashboard')),
      body: FutureBuilder<List<dynamic>>(
        future: _disasters,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          }

          final disasters = snapshot.data ?? [];

          if (disasters.isEmpty) {
            return const Center(child: Text('No active disasters'));
          }

          return ListView.builder(
            itemCount: disasters.length,
            itemBuilder: (context, index) {
              final disaster = disasters[index] as Map<String, dynamic>;
              return Card(
                margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                child: ListTile(
                  title: Text(disaster['title'] as String),
                  subtitle: Text('Severity: ${disaster['severity']}'),
                  trailing: Text((disaster['status'] as String).toUpperCase()),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

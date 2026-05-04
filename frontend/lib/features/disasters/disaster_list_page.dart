import 'package:flutter/material.dart';
import 'disaster.dart';
import 'disaster_api.dart';

class DisasterListPage extends StatefulWidget {
  const DisasterListPage({super.key});

  @override
  State<DisasterListPage> createState() => _DisasterListPageState();
}

class _DisasterListPageState extends State<DisasterListPage> {
  final DisasterApi _api = DisasterApi();
  late Future<List<Disaster>> _future;

  @override
  void initState() {
    super.initState();
    _future = _api.fetchDisasters();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Active Disasters')),
      body: FutureBuilder<List<Disaster>>(
        future: _future,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          }

          final disasters = snapshot.data ?? [];
          if (disasters.isEmpty) {
            return const Center(child: Text('No active disasters yet.'));
          }

          return ListView.builder(
            itemCount: disasters.length,
            itemBuilder: (context, index) {
              final disaster = disasters[index];
              return ListTile(
                title: Text(disaster.title),
                subtitle: Text('${disaster.location} • ${disaster.severity.toUpperCase()}'),
              );
            },
          );
        },
      ),
    );
  }
}

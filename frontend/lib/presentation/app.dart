import 'package:flutter/material.dart';
import '../features/disasters/disaster_list_page.dart';

class ReliefNetApp extends StatelessWidget {
  const ReliefNetApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ReliefNet',
      theme: ThemeData(colorSchemeSeed: Colors.blue, useMaterial3: true),
      home: const DisasterListPage(),
    );
  }
}

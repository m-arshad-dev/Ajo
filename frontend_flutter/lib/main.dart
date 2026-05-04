import 'package:flutter/material.dart';
import 'screens/auth_screen.dart';

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
      theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: Colors.redAccent), useMaterial3: true),
      home: const AuthScreen(),
    );
  }
}

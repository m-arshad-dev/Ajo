import 'dart:convert';
import 'package:http/http.dart' as http;
import 'disaster.dart';

class DisasterApi {
  final String baseUrl;

  DisasterApi({this.baseUrl = 'http://localhost:4000/api'});

  Future<List<Disaster>> fetchDisasters() async {
    final response = await http.get(Uri.parse('$baseUrl/disasters'));
    if (response.statusCode != 200) {
      throw Exception('Failed to load disasters');
    }

    final data = jsonDecode(response.body) as List<dynamic>;
    return data
        .map((item) => Disaster.fromJson(item as Map<String, dynamic>))
        .toList();
  }
}

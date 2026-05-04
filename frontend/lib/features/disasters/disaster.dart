class Disaster {
  final String id;
  final String title;
  final String location;
  final String severity;

  Disaster({
    required this.id,
    required this.title,
    required this.location,
    required this.severity,
  });

  factory Disaster.fromJson(Map<String, dynamic> json) {
    return Disaster(
      id: json['id'] as String,
      title: json['title'] as String,
      location: json['location'] as String,
      severity: json['severity'] as String,
    );
  }
}

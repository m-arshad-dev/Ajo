import 'package:flutter_test/flutter_test.dart';
import 'package:reliefnet_frontend/main.dart';

void main() {
  testWidgets('renders ReliefNet Dashboard title', (WidgetTester tester) async {
    await tester.pumpWidget(const ReliefNetApp());

    expect(find.text('ReliefNet Dashboard'), findsOneWidget);
  });
}

import '/flutter_flow/flutter_flow_util.dart';
import 'slider_widget.dart' show SliderWidget;
import 'package:flutter/material.dart';

class SliderModel extends FlutterFlowModel<SliderWidget> {
  ///  Local state fields for this component.

  String title = 'If I were a mother';

  String author = 'By Chukie Morsi';

  String image =
      'https://cefmorsiministriesinternational.com/wp-content/uploads/2021/01/If-I-Were-A-Mother.png';

  String category = 'Books';

  String date = 'Every 1st & 2nd Thursday in the Month';

  String time = '7:30pm';

  String location = 'Zoom';

  ///  State fields for stateful widgets in this component.

  // State field(s) for Slider1 widget.
  PageController? slider1Controller;

  int get slider1CurrentIndex => slider1Controller != null &&
          slider1Controller!.hasClients &&
          slider1Controller!.page != null
      ? slider1Controller!.page!.round()
      : 0;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {}
}

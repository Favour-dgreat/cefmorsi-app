import '/flutter_flow/flutter_flow_util.dart';
import 'home_widget.dart' show HomeWidget;
import 'package:flutter/material.dart';

class HomeModel extends FlutterFlowModel<HomeWidget> {
  ///  State fields for stateful widgets in this page.

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

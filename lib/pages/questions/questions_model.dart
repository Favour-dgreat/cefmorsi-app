import '/flutter_flow/flutter_flow_util.dart';
import 'questions_widget.dart' show QuestionsWidget;
import 'package:flutter/material.dart';

class QuestionsModel extends FlutterFlowModel<QuestionsWidget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for senderEmail widget.
  FocusNode? senderEmailFocusNode;
  TextEditingController? senderEmailTextController;
  String? Function(BuildContext, String?)? senderEmailTextControllerValidator;
  // State field(s) for emailBody widget.
  FocusNode? emailBodyFocusNode;
  TextEditingController? emailBodyTextController;
  String? Function(BuildContext, String?)? emailBodyTextControllerValidator;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    senderEmailFocusNode?.dispose();
    senderEmailTextController?.dispose();

    emailBodyFocusNode?.dispose();
    emailBodyTextController?.dispose();
  }
}

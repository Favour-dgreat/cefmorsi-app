import '/auth/firebase_auth/auth_util.dart';
import '/flutter_flow/flutter_flow_icon_button.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import 'signin_widget.dart' show SigninWidget;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

class SigninModel extends FlutterFlowModel<SigninWidget> {
  ///  State fields for stateful widgets in this page.

  // State field(s) for emailaddresssignin widget.
  FocusNode? emailaddresssigninFocusNode;
  TextEditingController? emailaddresssigninTextController;
  String? Function(BuildContext, String?)?
      emailaddresssigninTextControllerValidator;
  // State field(s) for passwordsignin widget.
  FocusNode? passwordsigninFocusNode;
  TextEditingController? passwordsigninTextController;
  late bool passwordsigninVisibility;
  String? Function(BuildContext, String?)?
      passwordsigninTextControllerValidator;
  // State field(s) for Checkbox widget.
  bool? checkboxValue;

  @override
  void initState(BuildContext context) {
    passwordsigninVisibility = false;
  }

  @override
  void dispose() {
    emailaddresssigninFocusNode?.dispose();
    emailaddresssigninTextController?.dispose();

    passwordsigninFocusNode?.dispose();
    passwordsigninTextController?.dispose();
  }
}

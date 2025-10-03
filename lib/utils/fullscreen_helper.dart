// lib/utils/fullscreen_helper.dart

import 'package:flutter/services.dart';
import 'package:window_manager/window_manager.dart';

class FullscreenHelper {
  static bool _isFullscreen = true;
  static List<VoidCallback> _listeners = [];

  static bool get isFullscreen => _isFullscreen;

  static void addListener(VoidCallback listener) {
    _listeners.add(listener);
  }

  static void removeListener(VoidCallback listener) {
    _listeners.remove(listener);
  }

  static void _notifyListeners() {
    for (var listener in _listeners) {
      listener();
    }
  }

  static Future<void> toggleFullscreen() async {
    if (_isFullscreen) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }

  static Future<void> enterFullscreen() async {
    await windowManager.setFullScreen(true);
    _isFullscreen = true;
    _notifyListeners();
  }

  static Future<void> exitFullscreen() async {
    await windowManager.setFullScreen(false);
    _isFullscreen = false;
    _notifyListeners();
  }
}

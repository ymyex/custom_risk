# Repository Guidelines

## Project Structure & Module Organization
The Flutter app lives in `lib/`, with feature layers split across `models/`, `services/`, `pages/`, and reusable `widgets/`. `utils/` holds helpers shared across screens, while `theme/` keeps color and typography definitions. Game data and illustrations stay in `assets/` (see `assets/questions` for JSON, image variants, and companion docs), and platform-specific launchers live under `windows/`. Generated output lands in `build/`; avoid checking it in.

## Build, Test, and Development Commands
Run `flutter pub get` after changing dependencies, then `flutter run` (add `-d windows` on desktops) for local smoke tests. Use `flutter build windows` when packaging a desktop binary and `flutter run --profile` to profile heavy map interactions. Lint with `flutter analyze`, and prefer `dart format lib test` before sending reviews.

## Coding Style & Naming Conventions
We rely on the Flutter lints configured in `analysis_options.yaml`; fix warnings instead of suppressing them. Keep Dart files `snake_case.dart`, classes and widgets in PascalCase, and private members prefixed with `_`. Use two-space indentation, trailing commas in widget trees for cleaner diffs, and co-locate widget-specific extensions beside the widget under `lib/widgets`.

## Testing Guidelines
Unit and widget tests belong in a mirrored `test/` tree using `_test.dart` suffixes. Reach for `flutter_test`’s `WidgetTester` for page flows and prefer fakes over hitting `shared_preferences`. Target high-coverage on `game_state.dart` and `services/` logic; treat 75% line coverage as the floor for new work (check with `flutter test --coverage`). Add integration scenarios under `integration_test/` if you need multi-screen flows.

## Commit & Pull Request Guidelines
This export lacks git history, so default to Conventional Commits (`feat(gameplay): add bonus drafting`, `fix(ui): align map colors`). Keep messages under 72 characters in the subject and expand on motivation in the body when relevant. Pull requests should outline the change, list test commands run, and link any specs (e.g., `QUESTION_FEATURE_README.md`). Include before/after screenshots whenever you adjust `map_page.dart` or other UI-heavy files.

## Content & Configuration Tips
Refresh question assets by updating `assets/questions/questions.json` and regenerating thumbnails under `assets/questions/images/`; document every rename in `FILE_RENAME_GUIDE.md` before shipping. Bundle new country configurations through `models/country_configuration.dart`, and surface user-facing strings via `flutter_localizations` to keep future translations straightforward.

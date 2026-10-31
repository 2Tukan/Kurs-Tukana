# Kurs Tukana — darmowa strona portfolio

Gotowa jednostronicowa witryna w języku polskim. Działa bez serwera, instalowania pakietów, płatnych czcionek i zewnętrznych bibliotek.

## Pliki
- `index.html` — treści i układ strony, tutaj zmieniasz teksty, projekty, link do e-maila.
- `style.css` — kolory, wygląd i dostosowanie do telefonu.
- `script.js` — rozwijane menu na telefonie i rok w stopce.
- `assets/favicon.svg` — mała ikona w karcie przeglądarki.

## Krok 1 — Zobacz stronę na komputerze
Otwórz `index.html` podwójnym kliknięciem. Nie trzeba niczego instalować.

## Krok 2 — Zmień treści
Otwórz `index.html` w Notatniku albo Visual Studio Code (darmowy edytor).

1. Znajdź tekst **Pomysły mają** i wpisz własne hasło.
2. Znajdź **To jest Kurs Tukana** i napisz kilka zdań o sobie.
3. W sekcji **WYBRANE PRACE** zastąp trzy przykładowe tytuły oraz opisy własnymi realizacjami.
4. Koniecznie zmień `twoj-adres@example.com` w odnośniku `mailto:` na swój prawdziwy e-mail. Usuń także przypomnienie „Przed publikacją...” umieszczone tuż pod przyciskiem, gdy już to zrobisz.
5. W razie potrzeby zmień nazwę strony w znaczniku `<title>` i opis w `<meta name="description">`.
6. W `style.css`, w pierwszym wierszu `:root`, można zmienić podstawowe kolory (np. `--ink`, `--green`, `--cream`).

Wskazówka: można wysłać zawartość pliku `index.html` do ChatGPT i poprosić o konkretną zmianę, np. „dodaj galerię zdjęć w sekcji projekty”.

## Krok 3 — Opublikuj za 0 zł na GitHub Pages
1. Załóż bezpłatne konto na https://github.com/ lub zaloguj się.
2. Wybierz **New repository** (Nowe repozytorium).
3. Nazwa repozytorium: **kurs-tukana**. Ustaw widoczność **Public** i kliknij **Create repository**.
4. Na stronie nowego repozytorium wybierz **uploading an existing file** (lub **Add file → Upload files**).
5. Wgraj pliki `index.html`, `style.css`, `script.js` oraz cały folder `assets` (tak, by ikona była w `assets/favicon.svg`). Nie wgrywaj samego ZIP-a — GitHub potrzebuje rozpakowanych plików. Wybierz **Commit changes**.
6. Przejdź do **Settings → Pages**.
7. W sekcji **Build and deployment** wybierz **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, a następnie **Save**.
8. Gdy wdrożenie się powiedzie, odwiedź: `https://TWOJ-LOGIN.github.io/kurs-tukana/`. Wielkość liter i nazwa repozytorium w adresie muszą być zgodne z tym, co utworzono. Link do opublikowanej strony znajdziesz też w Settings → Pages.

Strona i repozytorium będą publiczne — nie umieszczaj w plikach prywatnych danych ani haseł. Github Pages na bezpłatnym planie działa dla publicznych repozytoriów. Nie trzeba kupować domeny. Własna domena, jeśli kiedyś ją zechcesz, zwykle jest osobnym kosztem.

Oficjalne instrukcje:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edycja po publikacji
Zmień plik na GitHub lub wgraj zaktualizowaną wersję i zatwierdź zmiany. GitHub Pages ponownie opublikuje stronę.

## Ważne ograniczenia
- Przycisk kontaktu otwiera aplikację pocztową użytkownika, nie jest formularzem. Formularz wysyłający wiadomości wymaga dodatkowej usługi lub serwera.
- Karty projektów są przykładowe; przed publikacją zastąp je swoimi prawdziwymi materiałami.
- GitHub Pages nadaje się do statycznego portfolio, ale nie jest usługą przeznaczoną do hostingu zaplecza sklepu lub przetwarzania płatności.

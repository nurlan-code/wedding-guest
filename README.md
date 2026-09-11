# Toy Qonaq Siyahısı — Masanı Tap 💍

Toyda operatorun telefonundan istifadə edərək qonağın adını yazıb masasını
saniyələr içində tapması üçün sadə, sürətli, mobil-first veb tətbiq.

Heç bir backend, database, login və ya admin panel yoxdur — tamamilə
statik/frontend layihədir. Bütün qonaq məlumatları layihənin içindəki bir
data faylında saxlanılır.

**Texnologiya:** React + Vite + TypeScript + Tailwind CSS

---

## 🚀 Quraşdırma

```bash
npm install
npm run dev
```

Brauzerdə açılan linkə keçin (adətən `http://localhost:5173`).

Production build üçün:

```bash
npm run build
```

Nəticə `dist/` qovluğunda hazır olacaq.

---

## ✏️ Toy məlumatlarını necə dəyişmək olar

Başqa bir toy üçün istifadə etmək istəyirsinizsə, yalnız **iki fayla**
baxmalısınız. Kodun qalan hissəsinə toxunmağa ehtiyac yoxdur.

### 1. Qonaq siyahısı — `src/data/guests.ts`

Faylı açın və hər qonaq üçün bu formatda bir sətir görəcəksiniz:

```ts
{ id: 1, firstName: "Nurlan", lastName: "Məmmədli", tableNumber: 14 },
```

- `firstName` — qonağın adı
- `lastName` — qonağın soyadı
- `tableNumber` — hansı masada oturacağı

Mövcud demo məlumatları öz real qonaq siyahınızla əvəz edin.

**Yeni qonaq əlavə etmək üçün** siyahının sonuna eyni formatda yeni sətir
əlavə edin (hər `id` unikal olmalıdır):

```ts
{ id: 53, firstName: "Ad", lastName: "Soyad", tableNumber: 1 },
```

TypeScript avtomatik yoxlayacaq ki, sahələri düzgün doldurmusunuz (məsələn
`tableNumber` mütləq rəqəm olmalıdır, mətn yox).

### 2. Toyun adı və mesajı — `src/config.ts`

```ts
export const weddingConfig = {
  coupleNames: "Nurlan & Aysu",
  subtitle: "Toy Qonaq Sistemi",
  welcomeMessage: "Xoş gəlmisiniz! Sizin masanız {table}-dür.",
  eventDate: "18 Oktyabr 2026",
};
```

`{table}` yer tutucusu avtomatik olaraq qonağın masa nömrəsi ilə əvəz olunur.

Dəyişikliklərdən sonra faylı yadda saxlayın, `npm run build` işlədin və
yenidən deploy edin — bu qədər.

---

## 🔍 Axtarış necə işləyir

- Ad, soyad və ya hər ikisi ilə axtarış edilə bilər.
- Böyük/kiçik hərf fərqi yoxdur (`Nurlan`, `nurlan`, `NURLAN` — eynidir).
- Azərbaycan hərfləri olmadan yazılış da tanınır (`Memmedli` → `Məmmədli`).
- Nəticələr prioritetə görə sıralanır: tam ad+soyad uyğunluğu → tam ad →
  tam soyad → başlanğıcda uyğunluq → içində keçmə.
- Yalnız bir nəticə olduqda böyük masa nömrəsi kartı avtomatik açılır.
- Bir neçə eyni adlı qonaq varsa, siyahıdan düzgün şəxs seçilir.

---

## 📦 Deployment (Vercel / Netlify / GitHub Pages)

### Vercel
1. Layihəni GitHub-a push edin.
2. vercel.com → "New Project" → repo-nu seçin.
3. Framework preset: **Vite** (avtomatik tanınır).
4. Deploy düyməsinə basın.

### Netlify
1. Layihəni GitHub-a push edin.
2. netlify.com → "Add new site" → repo-nu seçin.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Deploy.

### GitHub Pages
1. `npm run build` işlədin.
2. `dist/` qovluğunun məzmununu `gh-pages` branch-ına push edin (və ya
   `gh-pages` paketindən istifadə edin).
3. Repo Settings → Pages → mənbə olaraq `gh-pages` branch-ını seçin.

**Ümumi iş axını:**

```
1. src/data/guests.ts faylını real qonaqlarla doldurun
2. src/config.ts faylında toyun adını dəyişin
3. npm run build
4. dist/ qovluğunu seçdiyiniz platformaya deploy edin
```

---

## 📁 Layihə strukturu

```
src/
├── config.ts              ← Toyun adı və mesajı (BURADA DƏYİŞİN)
├── data/
│   └── guests.ts           ← Qonaq siyahısı (BURADA DƏYİŞİN)
├── utils/
│   └── search.ts            ← Axtarış və normalizasiya məntiqi
├── components/
│   ├── SearchBar.tsx        ← Axtarış input-u
│   ├── GuestListItem.tsx    ← Bir neçə nəticə olduqda sətir
│   ├── ResultCard.tsx       ← Böyük masa nömrəsi nəticə kartı
│   ├── EmptyState.tsx       ← Axtarış boş olduqda görünən mesaj
│   └── NotFoundState.tsx    ← Qonaq tapılmadıqda görünən mesaj
├── App.tsx                  ← Əsas komponent (bütün hissələri birləşdirir)
└── index.css                 ← Qlobal stillər (Tailwind)
```

Bu strukturun heç bir hissəsi konkret toya bağlı deyil — `guests.ts` və
`config.ts` xaricində heç nə dəyişdirmədən istənilən sayda fərqli toy üçün
təkrar istifadə edilə bilər.

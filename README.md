# 🏪 Bizim Pazar — Saha Denetim Formu

Bizim Pazar Gıda A.Ş. saha denetim operasyonları için geliştirilmiş mobil uyumlu web uygulaması.

---

## 🚀 Özellikler

- **9 Bölümlü Denetim Formu** — Raf, SKT, Etiket, Depo, Personel, İade ve Değerlendirme
- **☁️ Otomatik Kayıt** — Her alan doldurulunca anında kaydedilir, uygulama kapansa bile kaldığı yerden devam eder
- **📷 Barkod Tarama** — Fotoğraf çekerek barkod okuma + Open Food Facts veritabanından otomatik ürün adı getirme
- **📸 Fotoğraf Ekleme** — Her bölüme kanıt fotoğrafı eklenebilir
- **📄 PDF İndirme** — Denetim raporu PDF olarak telefona indirilebilir
- **📝 Word İndirme** — Denetim raporu .doc formatında indirilebilir
- **📊 Otomatik Puanlama** — 100 puan üzerinden anlık hesaplama
- **📲 PWA Desteği** — Telefona uygulama gibi kurulabilir (Ana Ekrana Ekle)

---

## 🏪 Şubeler

- Adliye Şubesi
- Adana Yolu Şubesi
- Cengiz Topel Şubesi
- Andırın Caddesi Şubesi
- Osmaniye Yolu Şubesi
- Merkez Depo

---

## 📊 Puanlama Sistemi

| Bölüm | Ağırlık |
|-------|---------|
| SKT Kontrolü | %25 |
| Raf & Planogram | %20 |
| Fiyat & Etiket | %15 |
| Depo Düzeni | %15 |
| Personel & Hijyen | %15 |
| İade Yönetimi | %10 |

| Puan | Durum |
|------|-------|
| 80–100 | ✅ Başarılı |
| 60–79 | ⚠️ Geliştirilmeli |
| 0–59 | 🔴 Kritik |

---

## 📲 Telefona Kurulum (PWA)

**Android (Chrome):**
1. Uygulamayı Chrome'da aç
2. Sağ üst köşe `⋮` menü → **"Ana ekrana ekle"**

**iPhone (Safari):**
1. Uygulamayı Safari'de aç
2. Paylaş butonu → **"Ana Ekrana Ekle"**

---

## 🛠️ Teknik Detaylar

- **Tek dosya HTML** — Kurulum gerektirmez
- **React 18** (CDN) + **Babel Standalone** ile JSX desteği
- **localStorage** ile offline-uyumlu veri saklama
- **BarcodeDetector API** ile fotoğraftan barkod okuma
- **Open Food Facts API** ile ürün adı sorgulama
- Bizim Pazar renk paleti: Lacivert `#1B3A6B` · Kırmızı `#C0212B` · Altın `#E8A020`

---

## 👤 Geliştirici

**Mehmet Konur** — Operasyon Müdürü  
Bizim Pazar Gıda A.Ş. | Osmaniye-Kadirli Bölgesi

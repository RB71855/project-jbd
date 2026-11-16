import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    // Saat di lokal, langsung simpan ke folder proyek.
    // Saat online (production), bisa diganti ke 'github' agar admin non-IT bisa edit langsung dari browser!
    kind: 'local',
  },
  collections: {
    // 1. Katalog Produk (Water Treatment & Chemicals)
    products: collection({
      label: 'Products Catalog',
      slugField: 'code',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        code: fields.slug({ name: { label: 'Product Code (e.g., WT-01, CH-01)' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Water Treatment', value: 'water' },
            { label: 'Industrial Chemicals', value: 'chemicals' },
          ],
          defaultValue: 'water',
        }),
        titleEn: fields.text({ label: 'Product Name (English)' }),
        titleId: fields.text({ label: 'Nama Produk (Indonesia)' }),
        descEn: fields.text({ label: 'Description (English)', multiline: true }),
        descId: fields.text({ label: 'Deskripsi (Indonesia)', multiline: true }),
        tagEn: fields.text({ label: 'Tag / Brand / Formula (English)' }),
        tagId: fields.text({ label: 'Tag / Merek / Rumus (Indonesia)' }),
      },
    }),

    // 2. Portofolio Proyek Strategis
    projects: collection({
      label: 'Strategic Projects',
      slugField: 'titleEn',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        titleEn: fields.slug({ name: { label: 'Project Title (English)' } }),
        titleId: fields.text({ label: 'Judul Proyek (Indonesia)' }),
        sectorEn: fields.text({ label: 'Industry Sector Badge (EN)' }),
        sectorId: fields.text({ label: 'Label Sektor Industri (ID)' }),
        descEn: fields.text({ label: 'Short Description (English)', multiline: true }),
        descId: fields.text({ label: 'Deskripsi Singkat (Indonesia)', multiline: true }),
        image: fields.image({
          label: 'Project Photo',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        featured: fields.checkbox({
          label: 'Highlight as Large Featured Card?',
          defaultValue: false,
        }),
      },
    }),
  },
  singletons: {
    // 3. Pengaturan Kontak & Informasi Perusahaan
    companySettings: singleton({
      label: 'Company & Contact Info',
      path: 'src/content/settings/company',
      format: { data: 'json' },
      schema: {
        address: fields.text({ label: 'Office Address', multiline: true }),
        phone: fields.text({ label: 'Phone Numbers' }),
        whatsapp: fields.text({ label: 'WhatsApp Number (format: 62812...)' }),
      },
    }),
  },
});
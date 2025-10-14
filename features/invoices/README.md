
src/
└── features/
    └── invoices/
        ├── components/       # Componentes UI específicos de invoices (InvoiceTable, InvoiceForm, etc)
        ├── hooks/            # Custom hooks (ex: useInvoices, useInvoiceForm)
        ├── api/              # Funções de requisição HTTP, tanstack queries, etc.
        ├── schemas/          # Schemas Zod ou Yup para validação
        ├── types/            # Tipos TypeScript relacionados (Invoice, InvoiceItem, etc)
        ├── utils/            # Funções utilitárias específicas (formatCurrency, getInvoiceStatus, etc)
        ├── services/         # Lógica de domínio (ex: cálculo de impostos, status)
        ├── store/            # Zustand ou contextos específicos dessa feature
        ├── pages/ or routes/ # (se for Next.js 14+) páginas/rotas específicas da feature
        ├── tests/            # Testes unitários e de integração da feature
        ├── index.ts          # Barrel export (exporta tudo o que a feature oferece)
        └── README.md         # (opcional) explicação rápida da feature
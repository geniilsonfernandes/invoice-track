import {
    Document,
    Font,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
      fontWeight: 700,
    },
    // Italic fonts
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc2dthjQ.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc69thjQ.ttf",
      fontWeight: 500,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcB9xhjQ.ttf",
      fontWeight: 600,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v19/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcPtxhjQ.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

const FONT_FAMILY = {
  inter: "Inter",
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
  },
  footer: {
    fontSize: 10,
    textAlign: "center",
    color: "grey",
    marginTop: 20,
  },

  ///

  invoiceInfo: {
    flexDirection: "column",
    gap: 2, // espaçamento entre ícone e texto
  },
  label: {
    fontSize: 8,
    color: "#666666",
    fontFamily: FONT_FAMILY.inter,
    marginBottom: 2,
  },
  value: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2D2D2D",
    fontFamily: FONT_FAMILY.inter,
    lineHeight: 1.5,
  },

  // table styles

  tableItem: {
    fontSize: 10,
    fontFamily: FONT_FAMILY.inter,
    marginBottom: 2,
    color: "#2D2D2D",
    fontWeight: "600",
  },
});

const items = [
  {
    name: "Mesa de Jantar de Madeira Maciça",
    quantity: 1,
    price: "1250.00",
    total: "1250.00",
  },
  {
    name: "Armário Sob Medida - MDF Branco",
    quantity: 2,
    price: "890.50",
    total: "1781.00",
  },
  {
    name: "Prateleira de Carvalho",
    quantity: 4,
    price: "145.90",
    total: "583.60",
  },
  {
    name: "Cabeceira de Cama Queen",
    quantity: 1,
    price: "640.00",
    total: "640.00",
  },
  {
    name: "Rack para TV com Portas de Correr",
    quantity: 1,
    price: "780.00",
    total: "780.00",
  },
];

const ItemList = () => (
  <View style={{ paddingHorizontal: 60, paddingTop: 30 }}>
    {items.map((item, index) => (
      <View
        key={index}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 8,
            paddingVertical: 4,
        }}
      >
        <View>
          <Text style={styles.tableItem}> {item.name} </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View
            style={{
              width: 50,
            }}
          >
            <Text style={styles.tableItem}> {item.quantity} </Text>
          </View>
          <View
            style={{
              width: 50,
            }}
          >
            <Text style={styles.tableItem}> {item.price}</Text>
          </View>
          <View
            style={{
              width: 50,
            }}
          >
            <Text style={styles.tableItem}> {item.total} </Text>
          </View>
        </View>
      </View>
    ))}
  </View>
);

export const InvoiceNumber = () => (
  <View style={styles.invoiceInfo}>
    <Text style={styles.label}>Invoice Number</Text>
    <Text style={styles.value}>INV-4932487</Text>
  </View>
);

// Create Document Component
export const PdfTemplate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <View
          style={{
            backgroundColor: "#F7F7F7",
            paddingHorizontal: 60,
            paddingVertical: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              gap: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text>logo</Text>
            </View>
            <View style={{ flex: 1 }}>
              <InvoiceNumber />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              gap: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Invoice From</Text>
              <Text style={styles.value}>
                Afterhub Studio{"\n"}
                Rua das Palmeiras, 123{"\n"}
                São Paulo, SP - Brasil{"\n"}
                afterhub@email.com
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Invoice To</Text>
              <Text style={styles.value}>
                Orbit Tech Solutions {"\n"}
                Av. Paulista, 999, 10º andar{"\n"}
                São Paulo, SP - Brasil {"\n"}
                finance@orbittech.io
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              gap: 20,
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                flex: 1,
              }}
            >
              <View>
                <Text style={styles.label}>Invoice Date</Text>
                <Text style={styles.value}>June 15, 2024</Text>
              </View>
              <View>
                <Text style={styles.label}>Due Date</Text>
                <Text style={styles.value}>June 30, 2024</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={styles.label}>Payment Terms</Text>
              <Text style={styles.value}>
                Invoice Date: 10/20/2025 Due in 10/20/2025 (10 days)
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 60,
          }}
        >
          <View
            style={{
              padding: 10,
            }}
          >
            <Text style={{ ...styles.value, color: "#666666", fontSize: 16 }}>
              Invoice
            </Text>
          </View>
        </View>
        <ItemList />
      </View>
      {/* 🔹 Footer fixo no fim da página */}
      <View style={styles.footer} fixed>
        <Text>
          Invoice Track — página
          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Text>
      </View>
    </Page>
  </Document>
);

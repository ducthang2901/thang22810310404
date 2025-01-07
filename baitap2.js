import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const notifications = [
  {
    id: "1",
    icon: "✔️",
    title: "Bước 1: Xác định nhu cầu khách hàng",
    content: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    time: "20/08/2020, 06:00",
  },
  {
    id: "2",
    icon: "👥",
    title: "Bạn có khách hàng mới!",
    content: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "3",
    icon: "👥",
    title: "Khách hàng được chia sẻ bị trùng",
    content:
      "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "4",
    icon: "👥",
    title: "Khách hàng được thêm bị trùng",
    content:
      "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "5",
    icon: "✔️",
    title: "Công việc sắp đến hạn trong hôm nay",
    content: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "6",
    icon: "✔️",
    title: "Công việc đã quá hạn",
    content:
      "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    time: "20/08/2020, 06:00",
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>{item.content}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  item: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#ffffff",
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    marginRight: 16,
  },
  icon: {
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});

export default NotificationScreen;
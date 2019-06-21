import React from "React";
import { View, StyleSheet } from "react-native";
import Field from "./Field";

export default props => {
    const rows = props.board.map((row, r) => {
        // retorna as linhas com as colunas dentro
        const columns = row.map((field, c) => {
            // nas colunas tem a unidade com os atributos de cada campo
            return <Field {...field} key={c} />;
        });
        return (
            <View key={r} style={{ flexDirection: "row" }}>
                {columns}
            </View>
        );
    });
    return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        backgroundColor: "#eee"
    }
});

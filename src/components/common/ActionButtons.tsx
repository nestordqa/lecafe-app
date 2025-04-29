import { TouchableOpacity, View } from "react-native";
import XButton from "../icons/XButtonIcon";
import SuperLikeButton from "../icons/SuperLikeButton";
import LikeButton from "../icons/LikeButton";
import { ActionButtonsProps } from "@/types/components";

// Componente de botones de acción (dislike, superlike, like)
const ActionButtons = ({ onDislike, onSuperLike, onLike }: ActionButtonsProps) => (
    <View style={styles.actionButtons}>
        {/* Botón de Dislike */}
        <TouchableOpacity style={styles.button} onPress={onDislike}>
            <XButton width={90} height={90}/>
        </TouchableOpacity>

        {/* Botón de SuperLike */}
        <TouchableOpacity style={[styles.button, styles.buttonShadow]} onPress={onSuperLike}>
            <SuperLikeButton width={90} height={90}/>
        </TouchableOpacity>

        {/* Botón de Like */}
        <TouchableOpacity style={styles.button} onPress={onLike}>
            <LikeButton width={90} height={90}/>
        </TouchableOpacity>
    </View>
);

const styles = {
    button: {
        borderRadius: 1000,
        boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: 'transparent',
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        backgroundColor: 'transparent',
    }
};

export default ActionButtons

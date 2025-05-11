import {StyleSheet, Text, TextStyle} from "react-native";
import {PropsWithChildren} from "react";
import {FontWeight, HeadingVariant} from "@/types/styles/properties";
import Colors from "@/constants/colors";

type Props = {
	weight?: FontWeight;
	variant?: HeadingVariant;
	family?: string;
	decoration?: 'underline' | 'line-through' | 'underline line-through' | 'none';
	style?: TextStyle;
};

const defaultProps: Props = {
	variant: 'h2',
	weight: 'bold',
	family: 'Inter',
	decoration: 'none',
	style: {
		padding: 5,
		color: Colors.Primary
	},
};

export default function Heading({
    children,
	props = defaultProps,
    style = defaultProps.style
}: { props: Props } & { style?: TextStyle } & PropsWithChildren) {
	const styles = headingStyles({ props, style });
	
	return (
	  <Text style={styles.text}>
		  {children}
	  </Text>
	)
};

const headingStyles = ({props, style}: { props: Props, style?: TextStyle }) => StyleSheet.create({
	text: {
		...style,
		textDecorationLine: props.decoration,
		fontFamily: props.family,
		fontWeight: props.weight,
		fontSize: props.variant === 'h1'
		  ? 32
		  : props.variant === 'h2'
			? 30
			: props.variant === 'h3'
				? 28
				: props.variant === 'h4'
					? 26
					: props.variant === 'h5'
						? 24
				        : props.variant === 'h6'
							? 22
							: 20,
	}
})

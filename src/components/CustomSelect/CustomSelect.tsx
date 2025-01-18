import { jsx } from '@emotion/react';
import Select, { OptionProps } from 'react-select';

export interface ColourOption {
	readonly value: string;
	readonly label: string;
	readonly color: string;
	readonly isFixed?: boolean;
	readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
	{ value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
	{ value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
	{ value: 'purple', label: 'Purple', color: '#5243AA' },
	{ value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
	{ value: 'orange', label: 'Orange', color: '#FF8B00' },
	{ value: 'yellow', label: 'Yellow', color: '#FFC400' },
	{ value: 'green', label: 'Green', color: '#36B37E' },
	{ value: 'forest', label: 'Forest', color: '#00875A' },
	{ value: 'slate', label: 'Slate', color: '#253858' },
	{ value: 'silver', label: 'Silver', color: '#666666' },
];
const Option = (props: OptionProps<ColourOption>) => {
	const { children, className, cx, getStyles, isDisabled, isFocused, isSelected, innerRef, innerProps } = props;
	return (
		<div
			ref={innerRef}
			className={cx(
				{
					option: true,
					'option--is-disabled': isDisabled,
					'option--is-focused': isFocused,
					'option--is-selected': isSelected,
				},
				className,
			)}
			{...innerProps}
		>
			{children}
		</div>
	);
};

export const CustomSelect = () => (
	<Select
		closeMenuOnSelect={false}
		components={{ Option }}
		styles={{
			option: (base) => ({
				...base,
				border: `1px dotted ${colourOptions[2].color}`,
				height: '100%',
			}),
		}}
		defaultValue={colourOptions[4]}
		options={colourOptions}
	/>
);

import { Dispatch, SetStateAction, } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes: [string, string]) {
	return classes.filter(Boolean).join(' ')
}

type ToggleProps = {
	enabled: boolean | undefined
	setEnabled: Dispatch<SetStateAction<boolean>>
}

export default function Toggle(props: ToggleProps) {
	const { enabled, setEnabled } = props;

	return (
		<Switch
			checked={enabled}
			onChange={setEnabled}
			className={classNames(
				enabled ? 'bg-indigo-600' : 'bg-gray-200',
				'relative mt-10 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
			)}
		>
			<span className="sr-only">Use setting</span>
			<span
				aria-hidden="true"
				className={classNames(
					enabled ? 'translate-x-5' : 'translate-x-0',
					'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
				)}
			/>
		</Switch>
	)
}

import * as React from "react";
import { DropdownMenu } from "radix-ui";
import "./index.css";
import { SendSortFieldProps } from "SRC/types/interfaces";




const SortDropdown: React.FC<SendSortFieldProps> = ({ sendData }) => {

	const sendSortField = (field: string) => {
		sendData(field);
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className="IconButton" aria-label="Customise options">
					Sort
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
					<DropdownMenu.Item className="DropdownMenuItem">
						<button
							className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
							onClick={() => sendSortField('scoreDesc')}
						>
							Score - High to Low
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="DropdownMenuItem">
						<button
							className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
							onClick={() => sendSortField('scoreAsc')}
						>
							Score - Low to High
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="DropdownMenuItem">
						<button
							className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
							onClick={() => sendSortField('popularityDesc')}
						>
							Popularity - High to Low
						</button>
					</DropdownMenu.Item>
					<DropdownMenu.Item className="DropdownMenuItem">
						<button
							className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
							onClick={() => sendSortField('popularityAsc')}
						>
							Popularity - Low to High
						</button>
					</DropdownMenu.Item>



				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default SortDropdown;


export interface IFlashContent {
	message: string;
	type: string;
}

export interface IFlashService {
	display(content: IFlashContent): void;
}

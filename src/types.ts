export type DiscourseCategory = {
	name: string;
	slug?: string;
	description?: string;
	subcategories?: DiscourseCategory[];
	subcategorySettings?: CategorySettings;

	// output fields
	topicId?: number;
} & CategorySettings;

export type CategorySettings = {
	styleType?: 'icon' | 'emoji';
	emoji?: string;
	color?: string;
	permissions?: Record<string, number>;
	customFields?: {
		private_topics_enabled: true;
		private_topics_allowed_groups: string;
	};
	readOnlyBanner?: string;
};

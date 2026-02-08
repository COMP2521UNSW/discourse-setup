export type DiscourseCategory = {
	name: string;
	color?: string;
	permissions?: Record<string, number>;
	customFields?: {
		private_topics_enabled: true;
		private_topics_allowed_groups: string;
	};
	styleType?: 'icon' | 'emoji';
	emoji?: string;
	childCategories?: DiscourseCategory[];
};

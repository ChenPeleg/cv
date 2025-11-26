export interface Experience {
	title?: string;
	subtitle?: string;
	location?: string;
	date?: string;
	explanation?: string;
	toBeContinued?: boolean;
}

export interface ProjectLink {
	title?: string;
	url?: string;
}

export interface Project {
	projectName?: string;
	url?: string;
	explanation?: string;
	links?: ProjectLink[];
}

export interface Technology {
	TechName?: string;
	TechExplanation?: string;
}

export interface Skill {
	skill?: string;
	percent?: string;
}

export interface EducationItem {
	title?: string;
	content?: string;
	date?: string;
}

export interface LanguageItem {
	language?: string;
	level?: string;
}

export interface Interest {
	hobi?: string; // kept the original property name from the JSON (typo preserved)
}

export interface PersonalInfoItem {
	title?: string;
	content?: string;
	north?: string;
	center?: string;
}

export interface Information {
	name?: string;
	image?: string;
	funnyProfileImages?: string[];
	email?: string;
	phone?: string;
	website?: string;
	websiteUrl?: string;
	linkedinName?: string;
	linkedin?: string;
	mediumLink?: string;
	mediumName?: string;
	aboutMe?: string;
	Experiences?: Experience[];
	Career?: string;
	ProjectsDescription?: string;
	Projects?: Project[];
	technology?: Technology[];
	Skills?: Skill[];
	Education?: EducationItem[];
	Languages?: LanguageItem[];
	Interests?: Interest[];
	personalInfo?: PersonalInfoItem[];
}

export type { Information as default };

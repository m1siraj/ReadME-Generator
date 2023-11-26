/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Author } from './Author';
import type { Contributor } from './Contributor';
import type { Tag } from './Tag';

export type Template = {
    id: string;
    title: string;
    author: Author;
    createdAt: string;
    contributors: Array<Contributor>;
    description: string;
    imageURL: string;
    isFeatured: boolean;
    tags: Array<Tag>;
};

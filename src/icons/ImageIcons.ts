// Image icon names from assets/images folder
export const imageIconNames = [
  'book-check',
  'box-3d',
  'box-alt',
  'comment',
  'diamond',
  'folder',
  'link',
  'message',
  'mortarboard',
  'phone',
  'print',
  'save',
  'user-add',
  'user-alt',
  'world',
] as const;

export type ImageIconName = (typeof imageIconNames)[number];

export interface ImageIconProps {
  name: ImageIconName;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}


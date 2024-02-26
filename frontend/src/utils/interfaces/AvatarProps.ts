interface AvatarProps {
  imageUrl?: string;
  altText?: string;
  width: number;
  height: number;
  children?: React.ReactNode;
  shape?: "circular" | "square" | "string";
}

export default AvatarProps;

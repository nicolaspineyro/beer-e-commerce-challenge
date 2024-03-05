import { AvatarProps } from "src/utils/interfaces";

const Avatar = ({
  imageUrl,
  altText,
  children,
  shape = "circular",
  width,
}: AvatarProps) => {
  const figureClassName = shape !== "string" ? shape : "circular";
  const avatarStyle: React.CSSProperties = {
    "--avatar-size": `${width}px`,
  } as React.CSSProperties;

  return (
    <figure className={figureClassName} style={avatarStyle}>
      {imageUrl && shape !== "string" ? (
        <img src={imageUrl} alt={altText} />
      ) : (
        <figcaption data-testid="avatar-children">{children}</figcaption>
      )}
    </figure>
  );
};

export default Avatar;

import React from "react";
import {
	ProjectsContainer,
	ProjectWrapper,
	ProjectRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrap,
	Img,
} from "./ProjectsElements";

const ProjectsSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	headline,
	lightText,
	darkText,
	description,
	img,
	alt,
}) => {
	return (
		<>
			<ProjectsContainer lightBg={lightBg} id={id}>
				<ProjectWrapper>
					<ProjectRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightText={lightText}>{description}</Subtitle>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</ProjectRow>
				</ProjectWrapper>
			</ProjectsContainer>
		</>
	);
};

export default ProjectsSection;

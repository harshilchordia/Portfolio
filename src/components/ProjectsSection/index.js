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
	BtnWrap,
} from "./ProjectsElements";
import { Button } from "../ButtonElement";
const ProjectsSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	headline,
	lightText,
	buttonLabel,
	description,
	img,
	alt,
	primary,
	dark,
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
								<BtnWrap>
									<Button
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
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

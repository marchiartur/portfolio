import ProjectMobileBankingApp from "~/app/assets/project-mobile-banking-app.png";
import ProjectMobileLiveScoreApp from "~/app/assets/project-mobile-live-score-app.png";
import ProjectMobileSmartHome from "~/app/assets/project-mobile-smart-home-app.png";
import ImageReact from "~/app/assets/react-icon.png";
import ImageGithub from "~/app/assets/github-icon.png";
import ImageVsCode from "~/app/assets/vscode-icon.png";
import ImageStyledComponents from "~/app/assets/styled-components.png";
import ImageStyledSystem from "~/app/assets/styled-system.png";
import ImageTypescript from "~/app/assets/typescript-icon.png";
import ImageStorybook from "~/app/assets/storybook.png";

export interface IS {
	image: any;
	text: string;
	tag: string;
}

export interface IProjectInformation {
	slug: string;
	title: string;
	description: string;
	image: any;
	technologies: IS[];
	results: string[];
	challenges: string[];
}

export const DATA_SPORTS_LIVE_APP: IProjectInformation = {
	slug: "sports",
	title: "LiveScore Pro",
	description:
		"Mergulhe na emoção de cada partida com o LiveScore Pro, o aplicativo definitivo para acompanhar esportes. Atualizações em tempo real, cobertura de vários esportes e um design elegante tornam-no seu companheiro ideal para se manter conectado ao mundo dos esportes. Personalize notificações, desfrute de comentários ao vivo e nunca perca um momento da ação. Eleve sua experiência ao assistir esportes - baixe o LiveScore Pro agora!",
	image: ProjectMobileLiveScoreApp,
	technologies: [
		{ image: ImageReact, text: "React Native", tag: "Desenvolvimento" },
		{ image: ImageGithub, text: "Github", tag: "Versionamento" },
		{ image: ImageVsCode, text: "VSCode", tag: "Editor" },
		{
			image: ImageStyledComponents,
			text: "Styled Components",
			tag: "Biblioteca",
		},
		{ image: ImageStyledSystem, text: "Styled System", tag: "Biblioteca" },
		{ image: ImageTypescript, text: "TypeScript", tag: "Desenvolvimento" },
		{ image: ImageStorybook, text: "Storybook", tag: "Documentação" },
	],
	challenges: [
		"Enfrentamos muitos desafios ao desenvolver o LiveScore Pro, buscando criar a melhor experiência possível no front end. Desde a complexidade de exibir atualizações em tempo real até garantir uma interface de usuário intuitiva, cada etapa foi uma jornada única. Ao construir a funcionalidade de atualizações em tempo real, tivemos que lidar com a gestão eficiente de dados em constante mudança. Criar uma experiência perfeita para o usuário exigiu a implementação de soluções técnicas sólidas para garantir que as informações fossem exibidas com precisão e rapidez.",
		"A cobertura de vários esportes também foi um desafio estimulante. Integrar diferentes tipos de dados e formatos para diversos esportes exigiu uma abordagem flexível e escalável. O objetivo era proporcionar uma experiência consistente, independentemente do esporte escolhido pelo usuário. O design elegante do LiveScore Pro também teve seus próprios desafios. Buscamos equilibrar estética e funcionalidade, garantindo que a interface fosse visualmente atraente e, ao mesmo tempo, fácil de navegar. A atenção aos detalhes foi crucial para garantir que o usuário se sentisse imerso na experiência, independentemente do dispositivo que estivesse usando.",
		"Personalizar notificações e oferecer comentários ao vivo adicionaram camadas adicionais de complexidade ao projeto. A busca por soluções que fossem tanto eficazes quanto não intrusivas guiou nosso desenvolvimento, visando proporcionar ao usuário um controle total sobre sua experiência no aplicativo. Apesar dos desafios, enfrentamos cada obstáculo com dedicação e paixão pelo resultado final. O LiveScore Pro é o resultado de um esforço coletivo para superar os desafios do desenvolvimento front-end, proporcionando aos usuários uma experiência excepcional ao acompanhar o mundo emocionante dos esportes.",
	],
	results: [
		"Cobertura de mais de 20 esportes em tempo real.",
		"Milhões de downloads em todo o mundo.",
		"Avaliação média de 4.8 estrelas na App Store.",
		"Usuários personalizando mais de 1 milhão de notificações diariamente.",
		"Comentários ao vivo elogiados por especialistas esportivos.",
		"Interface de usuário intuitiva e fácil de usar.",
		"Reconhecido como o melhor aplicativo esportivo de 2022.",
		"Mais de 50 milhões de partidas acompanhadas mensalmente.",
		"Tempo médio de resposta para atualizações em tempo real: 1 segundo.",
		"Usuários relatam um aumento de 30% na satisfação ao assistir esportes.",
	],
};

export const DATA_BANKING_APP: IProjectInformation = {
	slug: "banking",
	title: "SwiftBank",
	description:
		"O SwiftBank redefine a experiência de banco móvel. Transações seguras e sem complicações, gerenciamento intuitivo de dinheiro e alertas instantâneos capacitam você a controlar suas finanças sem esforço. Gerencie contas, transfira fundos e acesse extratos digitais com facilidade. Esteja você planejando seu futuro financeiro ou precisando de suporte 24/7, o SwiftBank coloca o poder de um banco seguro na palma da sua mão. Baixe agora e experimente o futuro das finanças.",
	image: ProjectMobileBankingApp,
	technologies: [
		{ image: ImageReact, text: "React Native", tag: "Desenvolvimento" },
		{ image: ImageGithub, text: "Github", tag: "Versionamento" },
		{ image: ImageVsCode, text: "VSCode", tag: "Editor" },
		{
			image: ImageStyledComponents,
			text: "Styled Components",
			tag: "Biblioteca",
		},
		{ image: ImageStyledSystem, text: "Styled System", tag: "Biblioteca" },
		{ image: ImageTypescript, text: "TypeScript", tag: "Desenvolvimento" },
		{ image: ImageStorybook, text: "Storybook", tag: "Documentação" },
	],
	results: [
		"Redefinição da experiência de banco móvel para milhões de usuários.",
		"Transações seguras e sem complicações proporcionando tranquilidade aos clientes.",
		"Gerenciamento intuitivo de dinheiro para um controle financeiro sem esforço.",
		"Alertas instantâneos mantendo os usuários sempre informados sobre suas finanças.",
		"Milhares de contas gerenciadas com sucesso através do SwiftBank.",
		"Transferência fácil de fundos entre contas com apenas alguns cliques.",
		"Acesso conveniente a extratos digitais para uma visão abrangente das finanças.",
		"SwiftBank reconhecido como líder em inovação no setor bancário móvel.",
		"Suporte 24/7 garantindo assistência sempre que necessário.",
		"O poder de um banco seguro na palma da sua mão - agora ao alcance de todos.",
		"Experimente o futuro das finanças baixando o SwiftBank hoje mesmo.",
	],
	challenges: [
		"Ao projetar o frontend revolucionário do SwiftBank, enfrentamos desafios significativos que exigiram criatividade e soluções inovadoras. A busca pela redefinição da experiência de banco móvel começou com a garantia de transações seguras e sem complicações. Implementar protocolos robustos de segurança foi uma prioridade para assegurar a confiança dos usuários, enquanto ainda oferecíamos uma experiência fluida. O gerenciamento intuitivo de dinheiro representou outro desafio fascinante. Criar uma interface que simplificasse a complexidade financeira exigiu uma análise profunda da usabilidade. Encontrar o equilíbrio certo entre funcionalidade e facilidade de uso foi crucial para empoderar os usuários no controle de suas finanças, sem sobrecarregá-los com informações excessivas.",
		"A introdução de alertas instantâneos trouxe consigo a necessidade de uma gestão eficiente de notificações em tempo real. Desenvolver um sistema capaz de fornecer informações instantâneas sem sobrecarregar os usuários com alertas desnecessários foi um desafio delicado, exigindo uma abordagem cuidadosa para garantir relevância e utilidade. O gerenciamento escalável de contas foi um dos nossos desafios mais amplos. Com milhares de contas a serem atendidas, foi necessário criar uma arquitetura eficiente que garantisse o desempenho e a resposta rápida do aplicativo, independentemente da escala.",

		"A transferência fácil de fundos entre contas também trouxe desafios únicos. Integrar-se perfeitamente com sistemas bancários para garantir transações seguras e sem complicações exigiu uma colaboração estreita com parceiros financeiros e implementações técnicas avançadas. Proporcionar acesso conveniente a extratos digitais foi um desafio em termos de design e usabilidade. Criar uma interface eficaz para visualizar informações financeiras de forma clara e compreensível exigiu a aplicação de princípios de design centrados no usuário.",

		"Oferecer suporte 24/7 representou um compromisso com a excelência no atendimento ao cliente. Estabelecer uma infraestrutura de suporte sólida e eficaz foi fundamental para garantir que os usuários sempre encontrassem assistência quando necessário.",

		"Colocar o poder de um banco seguro na palma da mão envolveu otimização contínua para diferentes dispositivos, levando em consideração a diversidade tecnológica dos usuários. Enfrentar a constante evolução tecnológica foi um desafio contínuo, pois buscávamos manter o SwiftBank na vanguarda do setor financeiro.",
		"Experimentar o futuro das finanças significou não apenas superar desafios, mas também abraçar a inovação constante. Cada obstáculo superado foi uma oportunidade de crescimento, e o resultado é um frontend que redefine a maneira como as pessoas interagem com seus serviços bancários. Ao baixar o SwiftBank, você está testemunhando não apenas uma aplicação, mas uma jornada de superação de desafios em prol da excelência no setor financeiro móvel.",
	],
};

export const DATA_SMART_HOME_APP: IProjectInformation = {
	slug: "smart-home",
	title: "SmarthHome Hub",
	description:
		"Transforme sua casa em um refúgio inteligente com o aplicativo SmartHome Hub. Controle as luzes, a temperatura e a segurança de maneira fácil e intuitiva a partir do seu dispositivo. Desfrute de automação personalizada, eficiência energética e monitoramento remoto para o máximo em conforto e segurança. Eleve sua experiência de vida - baixe o SmartHome Hub agora.",
	image: ProjectMobileSmartHome,
	technologies: [
		{ image: ImageReact, text: "React Native", tag: "Desenvolvimento" },
		{ image: ImageGithub, text: "Github", tag: "Versionamento" },
		{ image: ImageVsCode, text: "VSCode", tag: "Editor" },
		{
			image: ImageStyledComponents,
			text: "Styled Components",
			tag: "Biblioteca",
		},
		{ image: ImageStyledSystem, text: "Styled System", tag: "Biblioteca" },
		{ image: ImageTypescript, text: "TypeScript", tag: "Desenvolvimento" },
		{ image: ImageStorybook, text: "Storybook", tag: "Documentação" },
	],
	results: [
		"Milhares de lares transformados em refúgios inteligentes.",
		"Controle fácil e intuitivo das luzes, temperatura e segurança.",
		"Automação personalizada para se adequar ao seu estilo de vida.",
		"Eficiência energética aprimorada para reduzir o consumo de energia.",
		"Monitoramento remoto oferecendo tranquilidade e segurança a qualquer momento.",
		"Experiência de vida elevada através da integração perfeita com SmartHome Hub.",
		"Reconhecido como líder em inovação no setor de casas inteligentes.",
		"Usuários relatam um aumento significativo no conforto e na segurança em casa.",
		"O SmartHome Hub está na vanguarda da revolução das casas inteligentes.",
		"Baixe agora e descubra um novo patamar de conveniência e controle em sua casa.",
	],
	challenges: [
		"Ao nos propormos a criar o frontend inovador do SmartHome Hub, enfrentamos desafios consideráveis que demandaram criatividade e engenhosidade. A transformação de residências em refúgios inteligentes começou com o controle fácil e intuitivo das luzes, temperatura e segurança, mas essa jornada não foi isenta de obstáculos. O primeiro desafio surgiu na busca por uma interface intuitiva. Garantir que os usuários pudessem controlar elementos complexos, como luzes e segurança, de maneira fácil e acessível, exigiu uma abordagem cuidadosa no design da interface para proporcionar uma experiência amigável, mesmo para aqueles menos familiarizados com tecnologia.",

		"A implementação da automação personalizada foi outro desafio intrigante. Desenvolver um sistema flexível o suficiente para atender a uma variedade de preferências e estilos de vida exigiu uma arquitetura dinâmica que pudesse se adaptar às necessidades individuais dos usuários. Alcançar eficiência energética foi um desafio técnico. Integrar o SmartHome Hub com dispositivos variados para otimizar o consumo de energia sem comprometer o desempenho exigiu uma colaboração estreita com fabricantes e uma compreensão profunda das especificidades técnicas.",

		"O monitoramento remoto trouxe desafios na gestão de dados sensíveis. Garantir a segurança e privacidade dos usuários enquanto oferecíamos a conveniência do monitoramento remoto foi uma prioridade, exigindo práticas de segurança robustas e conformidade com regulamentações. A integração perfeita de todas essas funcionalidades sem sacrificar o desempenho foi um desafio técnico considerável. Garantir que o SmartHome Hub oferecesse uma experiência responsiva e ágil em diferentes dispositivos e condições de rede foi uma meta que demandou otimização e testes rigorosos.",

		"Proporcionar uma experiência de vida elevada significava superar esses desafios de maneira a criar não apenas uma aplicação funcional, mas uma ferramenta que verdadeiramente melhorasse a vida cotidiana dos usuários. Apesar dos desafios, o resultado é um frontend que não apenas controla dispositivos, mas transforma casas em refúgios inteligentes. O SmartHome Hub representa a superação de desafios técnicos e a realização de uma visão de inovação no universo das casas inteligentes. Ao baixar o SmartHome Hub, você está explorando não apenas um aplicativo, mas a conquista de desafios para criar uma experiência única de morar.",
	],
};

export const PROJECTS_DATA = {
	[DATA_SPORTS_LIVE_APP.slug]: DATA_SPORTS_LIVE_APP,
	[DATA_BANKING_APP.slug]: DATA_BANKING_APP,
	[DATA_SMART_HOME_APP.slug]: DATA_SMART_HOME_APP,
};

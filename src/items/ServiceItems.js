/* eslint-disable global-require */
export default class ServiceItems {
  static services = [
    {
      id: 'imagens-realistas',
      title: 'Imagens Realistas',
      description: 'Através de um renderizador, os modelos tridimensionais passam por um processo de aprimoramento através de inúmeros cálculos que geram uma imagem muito próxima de nossa realidade. Podemos testar inúmeras possibilidades projetuais com a utilização do softwares para trazermos o seu projeto o mais próximo possível da realidade.',
      image: require('@/assets/images/another-projects/imagens-realistas.png'),
    },
    {
      id: 'modelagem-3d',
      title: 'Modelagem 3D',
      description: 'Esse projeto consiste na elaboração tridimensional de maquetes eletrônicas para projetos de arquitetura e interiores. Oferecendo maior qualidade e segurança para a compreensão e execução do projeto te oferecendo a possibilidade de visualizar de perto cada detalhe do ambiente, simulando o mais real possível.',
      image: require('@/assets/images/another-projects/modelagem-3d.png'),
    },
    {
      id: 'planta-humanizada',
      title: 'Planta Humanizada',
      description: 'A planta humanizada tem como característica o fato de apresentar desenhos coloridos, com luz, efeitos e texturização. Além disso, também tem forte presença do mobiliário em sua concepção. O seu conceito define-se como desenho com formato de planta baixa, porém, incorporando outros elementos, que a humanizam.',
      image: require('@/assets/images/another-projects/planta-humanizada.png'),
    },
  ];
}

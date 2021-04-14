import * as S from './styles'

const Main = ({
    title = 'React Avançado II',
    description = 'Typescript, ReactJS, NexJS e Styled Components'
}) => (
    <S.Warpper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
    </S.Warpper>
)

export default Main

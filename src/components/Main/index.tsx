import * as S from './styles'

const Main = ({
    title = 'React Avançado',
    description = 'Typescript, ReactJS, NexJS e Styled Components'
}) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
    </S.Wrapper>
)

export default Main

import { renderWithTheme } from 'utils/tests/helpers'
import Highlight from '.'
import * as S from './Highlight.styles'

const props = {
  title: 'Heading 1',
  subTitle: 'Heading 2',
  backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render the heading and button', () => {
    const { getByRole } = renderWithTheme(<Highlight {...props} />)

    expect(getByRole('heading', { name: /Heading 1/i })).toBeInTheDocument()

    expect(getByRole('heading', { name: /Heading 2/i })).toBeInTheDocument()

    expect(getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    const { getByRole } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" />
    )

    expect(getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      `/float-image.png`
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})

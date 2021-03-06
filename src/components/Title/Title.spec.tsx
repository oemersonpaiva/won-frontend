import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Title from 'components/Title'

describe('<Title />', () => {
  it('should render a white heading by default', () => {
    const { getByRole } = renderWithTheme(<Title>Won Games</Title>)

    expect(
      getByRole('heading', { name: /won games/i }).parentElement
    ).toHaveStyle({
      color: '#fafafa;'
    })
  })

  it('should render a black heading when colors is passed', () => {
    const { getByRole } = renderWithTheme(
      <Title color="black">Won Games</Title>
    )

    expect(
      getByRole('heading', { name: /won games/i }).parentElement
    ).toHaveStyle({
      color: '#030517;'
    })
  })

  it('should render a heading with a line to the left side', () => {
    const { getByRole } = renderWithTheme(<Title lineLeft>Won Games</Title>)

    expect(getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #f231a5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Title lineBottom>Won Games</Title>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.4rem solid #f231a5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Title size="small">Won Games</Title>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Title size="huge">Won Games</Title>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })
})

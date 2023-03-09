import Button from "../components/Button"
import { GoBell } from 'react-icons/go'

function ButtonPage() {

  return (
    <div>
      <div>
        <Button primary onClick={() => console.log(`click`)}>
          <GoBell/>
          primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoBell />
          secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoBell />
          success
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBell />
          warning
        </Button>
      </div>
      <div>
        <Button danger>
          <GoBell />
          danger
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoBell />
          danger rounded
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoBell />
          danger outline
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          <GoBell />
          danger rounded outline
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
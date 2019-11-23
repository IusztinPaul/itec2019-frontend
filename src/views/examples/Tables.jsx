
import React from 'react';

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip, Input, Col, Button, Alert
} from 'reactstrap';
// core components
import Header from '../../components/Headers/Header';
import Maps from './Map';


class Tables extends React.Component {
  constructor(props) {
    super(props);
    // name, owner, price, location, storeName
    this.state = {
      items: [
        {
          name: 'nume1-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 12,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.737465,
          lng: 21.192758
        },
        {
          name: 'nume2-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 1,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.747066,
          lng: 21.269838
        },
        {
          name: 'nume3-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 2,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.761322,
          lng: 21.279116
        },
        {
          name: 'nume4-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 3,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.765037,
          lng: 21.231543
        },
        {
          name: 'nume5-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 5,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.765037,
          lng: 21.231543
        },
        {
          name: 'nume6-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 9,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.765037,
          lng: 21.231543
        },
        {
          name: 'nume7-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 1,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.765037,
          lng: 21.231543
        },
        {
          name: 'nume8-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 1,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.765037,
          lng: 21.231543
        },
        {
          name: 'nume9-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 1,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.765037,
          lng: 21.231543
        },
        {
          name: 'nume10-produs',
          owner: 'numeOnwer',
          price: 121,
          quantity: 1,
          location: '341fsafsdf',
          storeName: 'fadsfasdfasdfSTORE',
          lat: 45.762037,
          lng: 21.231513
        }
      ],
      isListSelected: true,
      quantities: [],
      isError: false
    };
  }

  componentDidMount() {
    const quantities = this.state.items.map((item) => ({ itemIndex: this.state.items.indexOf(item), quantity: 0 }));
    this.setState({ quantities: [...quantities] });
  }

  renderError = () => (
    <Alert color="warning">
      <strong>Error !</strong>
      {' '}
        Bad Quantity !
    </Alert>
  );


  getItem = (e, index) => {
    e.preventDefault();
    // REDUX HERE
    const item = this.state.items[index];
    if (item.quantity < parseInt(this.state.quantities[index].quantity, 10)) {
      this.setState({ isError: true });
      window.scrollTo(0, 0);
      setTimeout(() => this.setState({ isError: false }), 4000);
    }
    else {
      console.log(this.state.items[index], this.state.quantities[index].quantity);
    }
  };

  createItemInTable({ name, owner, price, location, storeName }, index) {
    return (
      <tr key={ index }>
        {/** IMAGE AND NAME * */}

        <th scope="row">
          <Media className="align-items-center">
            <img
              alt="..."
              src={ require('../../assets/img/theme/bootstrap.jpg') }
            />
            <Media>
              <span className="mb-0 text-sm">
                {name}
              </span>
            </Media>
          </Media>
        </th>
        {/** PRICE PER KG* */}
        <td>{`${price}lei`}</td>
        <td>
          <Badge color="" className="badge-dot mr-4">
            <i className="bg-warning" />
            {location}
          </Badge>
        </td>
        <td>
          {/** NAME AND STORE * */}
          { `${owner} ${storeName}`}
        </td>

        {/**       DROP DOWN * */}
        <td>
          <Input
            onChange={ (e) => this.updateQuantity(e, index) }
            placeholder="How many"
            type="number"
          />
        </td>
        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={ (e) => e.preventDefault() }
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>

            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem
                href="#pablo"
                onClick={ (e) => this.getItem(e, index) }
              >
                  Add to cart
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    );
  }


  onOtherThingSelected = (isListSelected) => {
    if (isListSelected === 'list') {
      this.setState({ isListSelected: 'list' });
    }
    else if (isListSelected === 'map') {
      this.setState({ isListSelected: 'map' });
    }
    else {
      this.setState({ isListSelected: 'grid' });
    }
  };

  renderTable = () => (
    <Container className="mt--7" fluid>
      {/* Table */}
      {this.state.isError ? this.renderError() : null}

      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Card tables</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Cost/kg</th>
                  <th scope="col">Location</th>
                  <th scope="col">Store and owner</th>
                  <th scope="col">Counter</th>

                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item, index) => this.createItemInTable({ ...item }, index))}
              </tbody>
            </Table>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={ (e) => e.preventDefault() }
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={ (e) => e.preventDefault() }
                    >
                        1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={ (e) => e.preventDefault() }
                    >
                        2
                      {' '}
                      <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={ (e) => e.preventDefault() }
                    >
                        3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={ (e) => e.preventDefault() }
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>
    </Container>
  );

  updateQuantity = (e, index) => {
    e.preventDefault();
    const newQuantities = this.state.quantities;
    const foundIndex = newQuantities.findIndex((x) => x.itemIndex === index);
    newQuantities[foundIndex] = { itemIndex: index, quantity: e.target.value };
    this.setState({ quantities: newQuantities });
  };

  renderGridItem = ({ name, owner, price, location, storeName }, index) => (
    <Col key={ index } className="col-sm" style={ { padding: 24 } }>
      <Card className="shadow">
        <CardHeader className="border-0">
          <h1 className="mb-0">{name}</h1>
        </CardHeader>
        <Media className="align-items-center">

          <img
            alt="..."
            src={ require('../../assets/img/theme/bootstrap.jpg') }
          />
          <div style={ { display: 'flex', flexDirection: 'column' } }>
            <div style={ { paddingBottom: '8px' } }>
              <h3 className="mb-0">{owner}</h3>
            </div>
            <div style={ { paddingBottom: '8px' } }>
              <h3 className="mb-0">{`${price} lei / Kg`}</h3>
            </div>
            <div style={ { paddingBottom: '8px' } }>
              <h3 className="mb-0">{`${storeName} ,${location}`}</h3>
            </div>
            <Input
              onChange={ (e) => this.updateQuantity(e, index) }
              placeholder="How many"
              type="number"
            />
          </div>

        </Media>

        <Button
          onClick={ (e) => this.getItem(e, index) }
          color="secondary"
          type="button"
        >
          Add to cart
        </Button>
      </Card>
    </Col>
  );

  transformForGridRecursive(list, isTakingTwo, result = []) {
    if (list.length === 0) {
      return result;
    }
    if (isTakingTwo) {
      const newList = [];
      newList.push(list.shift());
      if (list.length > 0) newList.push(list.shift());
      result.push(newList);
      this.transformForGridRecursive(list, !isTakingTwo, result);
    }
    else {
      const newList = [];
      newList.push(list.shift());
      if (list.length > 0) newList.push(list.shift());
      if (list.length > 0) newList.push(list.shift());
      result.push(newList);
      this.transformForGridRecursive(list, !isTakingTwo, result);
    }
  }

  // [ [1,2], [3,4,5], [1,2] ]
  renderGrid = () => {
    const newList = [];
    const stateItems = [...this.state.items];
    this.transformForGridRecursive(stateItems, true, newList);
    let itemId = 0;
    return (
      <Container className="mt--7" fluid>
        {this.state.isError ? this.renderError() : null}

        {newList.map((list, firstIndex) => (
          <Row key={ firstIndex }>
            {list.map((item, index) => this.renderGridItem({ ...item }, itemId++))}
          </Row>
        ))}
      </Container>
    );
  };

  render() {
    return (
      <>

        <Header onChangeTab={ this.onOtherThingSelected } />
        {/* Page content */}

        { this.state.isListSelected === 'list' ? (this.renderTable())
          : (this.state.isListSelected === 'map' ? (<Maps data = {this.state.items} />) : (this.renderGrid()))
        }
      </>
    );
  }
}

export default Tables;

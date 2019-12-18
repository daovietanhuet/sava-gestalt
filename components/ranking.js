import React from 'react';
import {Box, Avatar, Text, Divider, Column, SegmentedControl, Heading} from "gestalt";
import {TiHomeOutline, TiChartAreaOutline, TiCalendarOutline, TiTags, TiShoppingCart} from "react-icons/ti";

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0,
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  handleItemChange({ activeIndex }) {
    this.setState(prevState => ({ itemIndex: activeIndex }));
  };

  render() {
    const items = [
      'Gia đình',
      'Cá nhân',
    ];
    return(
      <Box>
        <Box padding={3} height="25vh" display="flex">
          <Column span={9}>
            <Box><Heading size="sm">11</Heading></Box>
            <Box><Text>Hạng của bạn</Text></Box>
          </Column>
          <Column span={3}>
            <Box height="10vh"></Box>
            <Avatar name={this.props.name} src={this.props.avatar}/>
          </Column>
        </Box>
        <Box padding={1} height="3rem">
          <SegmentedControl
            items={items}
            selectedItemIndex={this.state.itemIndex}
            onChange={this.handleItemChange}
            responsive
          ></SegmentedControl>
        </Box>
        <Box width="100%" paddingY={2}>
          <Box shape="rounded" padding={1} height="25vh" color="white">
            <Box shape="rounded" padding={1} height="13vh" color="white" display="flex">
              <Column span={2}>
                <Box width="12vh" position="relative">
                  <Avatar outline name="avatar"/>
                </Box>
              </Column>
             
              <Column span={10}>
                <Box color="lightGray" height="100%" shape="rounded"></Box>
              </Column>
            </Box>
            <Box display="flex" padding={1}>
              <Column span={9}>
                <Box paddingX={1}>
                  <Heading size="xs" truncate>Công thức màu</Heading>
                </Box>
                <Box paddingX={1}>
                  <Text truncate>quotes quotes quotes</Text>
                </Box>
              </Column>
              <Column span={3}>
                <Box height="100%" display='flex' alignItems="center" justifyContent="center">
                  <Text weight="bold">1</Text>
                </Box>
              </Column>
            </Box>
          </Box>



          <Box shape="rounded" padding={1} height="25vh" color="white">
            <Box shape="rounded" padding={1} height="13vh" color="white" display="flex">
              <Column span={2}>
                <Box width="12vh" position="relative">
                  <Avatar outline name="avatar"/>
                </Box>
              </Column>
             
              <Column span={10}>
                <Box color="lightGray" height="100%" shape="rounded"></Box>
              </Column>
            </Box>
            <Box display="flex" padding={1}>
              <Column span={9}>
                <Box paddingX={1}>
                  <Heading size="xs" truncate>Công thức màu</Heading>
                </Box>
                <Box paddingX={1}>
                  <Text truncate>quotes quotes quotes</Text>
                </Box>
              </Column>
              <Column span={3}>
                <Box height="100%" display='flex' alignItems="center" justifyContent="center">
                  <Text weight="bold">2</Text>
                </Box>
              </Column>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Ranking;
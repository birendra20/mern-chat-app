import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { Tooltip } from "@chakra-ui/tooltip";
import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon />
            </MenuButton>
            <MenuList></MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;

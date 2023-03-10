import React, { useEffect } from "react";

import "./MMenu.scss";

import settingsSVG from "./img/setting.svg";
import MetodSopr from "./MetodSopr";
import Instr from "./Instr";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function MMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen("true");
  }, []); // eslint-disable-line

  return (
    <>
      <Modal
        scrollBehavior="inside"
        size="xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>
            Электронный тренажер для подготовки по специальности: Монтаж и
            эксплуатация охранно-пожарной сигнализации
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>
          <Tabs isFitted>
            <TabList>
              <Tab>Начать</Tab>
              <Tab> Методическое сопровождение </Tab>
              <Tab>Инструкция</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="menu-training-tab">
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 1
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <Link to="/1l1">
                          <MenuItem> Уровень 1 </MenuItem>
                        </Link>

                        <Link to="/1l2">
                          <MenuItem>Уровень 2</MenuItem>
                        </Link>

                        <Link to="/1l3">
                          <MenuItem>Уровень 3</MenuItem>
                        </Link>

                        <Link to="/1l4">
                          <MenuItem>Уровень 4</MenuItem>
                        </Link>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 2
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <Link to="/2l1">
                          <MenuItem>Уровень 1 </MenuItem>
                        </Link>

                        <Link to="/2l2">
                          <MenuItem>Уровень 2</MenuItem>
                        </Link>

                        <Link to="/2l3">
                          <MenuItem>Уровень 3</MenuItem>
                        </Link>

                        <Link to="/2l4">
                          <MenuItem>Уровень 4</MenuItem>
                        </Link>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 3
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <Link to="/3l1">
                          <MenuItem>Уровень 1</MenuItem>
                        </Link>

                        <Link to="/3l2">
                          <MenuItem>Уровень 2</MenuItem>
                        </Link>

                        <Link to="/3l3">
                          <MenuItem>Уровень 3</MenuItem>
                        </Link>

                        <Link to="/3l4">
                          <MenuItem>Уровень 4</MenuItem>
                        </Link>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 4
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <Link to="/4l1">
                          <MenuItem>Уровень 1</MenuItem>
                        </Link>

                        <Link to="/4l2">
                          <MenuItem>Уровень 2</MenuItem>
                        </Link>

                        <Link to="/4l3">
                          <MenuItem>Уровень 3</MenuItem>
                        </Link>

                        <Link to="/4l4">
                          <MenuItem>Уровень 4</MenuItem>
                        </Link>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 5
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <Link to="/5l1">
                          <MenuItem>Уровень 1</MenuItem>
                        </Link>

                        <Link to="/5l2">
                          <MenuItem>Уровень 2</MenuItem>
                        </Link>
                      </MenuList>
                    </Portal>
                  </Menu>
                </div>
              </TabPanel>
              <TabPanel>
                <MetodSopr/>
              </TabPanel>
              <TabPanel>
                <Instr/>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <img
        onClick={onOpen}
        src={settingsSVG}
        className="absolute menu-training__btn"
        alt=""
      />
    </>
  );
}

export default MMenu;

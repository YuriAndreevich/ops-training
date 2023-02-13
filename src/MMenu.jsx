import React, { useEffect } from "react";

import "./MMenu.scss";

import settingsSVG from "./img/setting.svg";

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
                        <MenuItem>
                          <Link to="/ops-training/1l1"> Уровень </Link>1
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/1l2">Уровень 2</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/1l3">Уровень 3</Link>
                        </MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 2
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <MenuItem>
                          <Link to="/ops-training/2l1">Уровень 1</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/2l2">Уровень 2</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/2l3">Уровень 3</Link>
                        </MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 3
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <MenuItem>
                          <Link to="/ops-training/3l1">Уровень 1</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/3l2">Уровень 2</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/3l3">Уровень 3</Link>
                        </MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                  <Menu>
                    <MenuButton className="menu-training-card">
                      Задание 4
                    </MenuButton>
                    <Portal>
                      <MenuList zIndex="10000">
                        <MenuItem>
                          <Link to="/ops-training/4l1">Уровень 1</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/4l2">Уровень 2</Link>
                        </MenuItem>
                        <MenuItem>
                          <Link to="/ops-training/4l3">Уровень 3</Link>
                        </MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
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

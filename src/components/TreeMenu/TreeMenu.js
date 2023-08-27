import { React } from "react";
import TreeView from "@mui/lab/TreeView";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TreeItem from "@mui/lab/TreeItem";

function TreeMenu({ data, handleSelection }) {
  const renderTree = (nodes) =>
    nodes.map((obj) => (
      <TreeItem key={obj.id} nodeId={obj.id} label={obj.name}>
        {Array.isArray(obj.children) ? renderTree(obj.children) : null}
      </TreeItem>
    ));

  return (
    <div className="p-4 container-fluid border">
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<RemoveIcon />}
        defaultExpanded={["root"]}
        defaultExpandIcon={<AddIcon />}
        sx={{ flexGrow: 1, maxWidth: 500, overflowY: "auto" }}
        onNodeSelect={handleSelection}
      >
        {renderTree(data)}
      </TreeView>
    </div>
  );
}

export default TreeMenu;

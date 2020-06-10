/*
validator's isValidXML function receives a string, checks if a string is a valid xml, and returns a boolean.

<a /> => true
<a></a> => true
<a>test</a> => true
<a><b></b></a> => true
<a></a><b></b> => true

<a> => false
<<a></a> => false
<a><b></a></b> => false

IMPORTANT: Please note that we have our own internal rules about validity.
1. A node cannot contain a node with the same tag. ex) <a><a></a></a> => false
2. A node cannot be followed by a node with the same tag. ex) <a></a><a></a> => false
3. An xml cannot be more than 2 levels deep. ex) <a><b><c><d></d></c></b></a> => false

IMPORTANT: Feel free to use any open source libraries you find necessary. You can use xml parsing libraries as well.
IMPORTANT: Don't worry about XML declaration, node attributes, or unicode characters.

For further examples, please check basic_spec.js file.

DO NOT MODIFY
*/

/*
@param xmlString: a string, possibly a valid xml string
@return boolean;
*/
exports.isValidXML = xmlString => {
  if (xmlString.length === 0) {
    return false;
  }

  const openTagList = [];
  const deleteTagList = [];
  const split = xmlString.split("");

  for (let i = 0; i < split.length; i++) {
    const piece = split[i] + split[i + 1];
    if (piece === "<<" || piece === ">>") {
      return false;
    }

    const copy = xmlString.slice(i);
    const closeIndex = copy.indexOf(">");

    if (piece === "</") {
      const closeTag = copy.slice(2, closeIndex);
      const compareOpenTag = openTagList.pop();
      if (closeTag !== compareOpenTag) {
        return false;
      }
      if (deleteTagList.length) {
        const lastDeleteTag = deleteTagList.pop();
        if (lastDeleteTag === closeTag) {
          return false;
        }
      }
      deleteTagList.push(closeTag);
    } else if (split[i] === "<") {
      const openTag = copy.slice(1, closeIndex);
      if (openTag.slice(-1) !== '/') {
        if (openTagList.indexOf(openTag) > -1) {
          return false;
        }
        openTagList.push(openTag);
        if (openTagList.length > 2) {
          return false;
        }
      }
    }
  }

  if (openTagList.length) {
    return false;
  }

  return true;
};

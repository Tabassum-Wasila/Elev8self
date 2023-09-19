<?php

/**
 * DO NOT EDIT!
 * This file was automatically generated via bin/generate-validator-spec.php.
 */

namespace AmpProject\Validator\Spec\Tag;

use AmpProject\Extension;
use AmpProject\Format;
use AmpProject\Html\Attribute;
use AmpProject\Layout;
use AmpProject\Validator\Spec\AttributeList;
use AmpProject\Validator\Spec\Identifiable;
use AmpProject\Validator\Spec\SpecRule;
use AmpProject\Validator\Spec\Tag;

/**
 * Tag class AmpSpringboardPlayer.
 *
 * @package ampproject/amp-toolbox.
 *
 * @property-read string $tagName
 * @property-read array $attrs
 * @property-read array<string> $attrLists
 * @property-read array<array<string>> $ampLayout
 * @property-read array<string> $htmlFormat
 * @property-read array<string> $requiresExtension
 */
final class AmpSpringboardPlayer extends Tag implements Identifiable
{
    /**
     * ID of the tag.
     *
     * @var string
     */
    const ID = 'AMP-SPRINGBOARD-PLAYER';

    /**
     * Array of spec rules.
     *
     * @var array
     */
    const SPEC = [
        SpecRule::TAG_NAME => Extension::SPRINGBOARD_PLAYER,
        SpecRule::ATTRS => [
            Attribute::DATA_CONTENT_ID => [
                SpecRule::MANDATORY => true,
            ],
            Attribute::DATA_DOMAIN => [
                SpecRule::MANDATORY => true,
            ],
            Attribute::DATA_ITEMS => [
                SpecRule::MANDATORY => true,
            ],
            Attribute::DATA_MODE => [
                SpecRule::MANDATORY => true,
                SpecRule::VALUE_CASEI => [
                    'playlist',
                    'video',
                ],
            ],
            Attribute::DATA_PLAYER_ID => [
                SpecRule::MANDATORY => true,
                SpecRule::VALUE_REGEX_CASEI => '[a-z0-9]+',
            ],
            Attribute::DATA_SITE_ID => [
                SpecRule::MANDATORY => true,
                SpecRule::VALUE_REGEX => '[0-9]+',
            ],
        ],
        SpecRule::ATTR_LISTS => [
            AttributeList\ExtendedAmpGlobal::ID,
        ],
        SpecRule::AMP_LAYOUT => [
            SpecRule::SUPPORTED_LAYOUTS => [
                Layout::FILL,
                Layout::FIXED,
                Layout::FLEX_ITEM,
                Layout::RESPONSIVE,
            ],
        ],
        SpecRule::HTML_FORMAT => [
            Format::AMP,
        ],
        SpecRule::REQUIRES_EXTENSION => [
            Extension::SPRINGBOARD_PLAYER,
        ],
    ];
}
